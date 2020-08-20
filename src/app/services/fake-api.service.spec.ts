import { TestBed } from '@angular/core/testing';
import { FakeApiService } from './fake-api.service';

describe('FakeApiService', () => {
  let service: FakeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have pay function with random result', async () => {
    const operatorExample = "MTS"
    const numberExample = "(000) 000-00-00"
    const sumExample = 50
    const paths = {
      success: 0,
      fail: 0
    }
    while (paths.success === 0 || paths.fail === 0) {
      let result = await service.pay(operatorExample, numberExample, sumExample)
      if (result.success && paths.success === 0) {
        expect(result.status).toEqual(200)
        expect(result.message).toEqual('Payment accepted')
        expect(result.success).toBeTruthy()
        expect(result.data.sent[0]).toEqual(operatorExample)
        expect(result.data.sent[1]).toEqual(numberExample)
        expect(result.data.sent[2]).toEqual(sumExample)
        paths.success++
      } else if (!result.success && paths.fail === 0) {
        expect(result.status).toEqual(500)
        expect(result.message).toEqual('Payment failed')
        expect(result.success).toBeFalse()
        expect(result.data.sent[0]).toEqual(operatorExample)
        expect(result.data.sent[1]).toEqual(numberExample)
        expect(result.data.sent[2]).toEqual(sumExample)
        paths.fail++
      }
    }
  });
});
