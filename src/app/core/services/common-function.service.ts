import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonFunction {

  public logTag = 'Common Function';

  async encode(encodeData: any) {
    try {
      return btoa(encodeData);
    } catch (error) {
      console.log(`Error | ${this.logTag} | encodeData | ${error}`);
      return false
    }
  }

  async decode(decodeData: any) {
    try {
      return atob(decodeData);
    } catch (error) {
      console.log(`Error | ${this.logTag} | decodeData | ${error}`);
      return false
    }
  }
}
