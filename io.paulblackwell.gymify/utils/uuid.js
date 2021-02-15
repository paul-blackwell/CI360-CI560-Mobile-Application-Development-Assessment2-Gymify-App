/**
   * Title: React: unique ID generation
   * Author: Riccardo Persiani
   * Date: 15, February, 2021
   * Code version: 1.0
   * Availability: https://stackoverflow.com/questions/48006903/react-unique-id-generation/50039775
   * 
   */

// Will make random unique identifier that will be 
export default function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}