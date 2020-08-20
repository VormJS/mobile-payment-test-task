import { Injectable } from '@angular/core';
import { FakeApiAnswer } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() { }
  async pay(operatorTitle:string, phoneNumber: string, sum: number): Promise<FakeApiAnswer> {
    const response = new FakeApiAnswer
    await new Promise(function (resolve) {
      setTimeout(() => {
        resolve("ok")
        if (Math.random() > 0.5) {
          Object.assign(response, {status: 200, success: true, data: {sent: [operatorTitle, phoneNumber, sum]}, message: 'Payment accepted'});
        }
        else {
          Object.assign(response, {status: 500, success: false, data: {sent: [operatorTitle, phoneNumber, sum]}, message: 'Payment failed'});
        }
      },1000 )
    });
    return response
  }
}
