import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Rx';

/**
 * @name AdMob
 * @description
 * @usage
 */
@Plugin({
  plugin: 'cordova-plugin-square',
  pluginRef: 'cordova.square',
  repo: 'https://github.com/somethingnew2-0/cordova-plugin-square',
  platforms: ['Android']
})
export class Square {

  // Static Methods

  /**
   * Sets the values for configuration
   * @param options initial configuration options
   * @returns {Promise} Returns a promise that resolves if the options are set successfully
   */
  @Cordova()
  static setOptions(options: any): Promise<any> {return; }

  /**
   * Requests a charge with the Square Register SDK
   * @param amount the amount to charge in cents (100 is $1.00)
   * @param options configuration options for this request
   * @returns {Promise} Returns a promise that resolves if the options are set successfully
   */
  @Cordova()
  static requestCharge(amount: number, options: any): Promise<any> {return; }
}
