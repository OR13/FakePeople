
/// <reference path="../reference.ts"/>

var maleFirstNamesArray = require('../datasets/maleFirstNames.json').maleFirstNames;
var maleFirstNamesArrayLength = maleFirstNamesArray.length;

var femaleFirstNamesArray = require('../datasets/femaleFirstNames.json').femaleFirstNames;
var femaleFirstNamesArrayLength = femaleFirstNamesArray.length;

var lastNamesArray = require('../datasets/lastNames.json').lastNames;
var lastNamesArrayLength = lastNamesArray.length;

var streetNamesArray = require('../datasets/streetNames.json').streetNames;
var streetNamesArrayLength = streetNamesArray.length;

var zipCodesArray = require('../datasets/zipCodes.json').zipCodes;
var zipCodesArrayLength = zipCodesArray.length;

export interface IPerson {
    firstName: string;
    lastName: string;
    birthDate:string;
    gender:string;
    address:string;
}

export class Person implements IPerson {

    firstName:string;
    lastName:string;
    birthDate: string;
    gender:string;
    address: string;

    constructor() {
        this.gender = this.getRandomGender();
        this.firstName = this.getRandomFirstName();
        this.lastName = this.getRandomFirstName();
        this.lastName = this.getRandomLastName();
        this.birthDate = this.getRandomBirthDate();
        this.address = this.getRandomAddress();
    }

    getRandomGender(){
        var genders = ['Male', 'Female'];
        return genders[Math.floor(Math.random() * genders.length)];
    }

    getRandomFirstName(){
        if (this.gender === 'Male'){
            return maleFirstNamesArray[Math.floor(Math.random() * maleFirstNamesArrayLength)];
        }

        if (this.gender === 'Female'){
            return femaleFirstNamesArray[Math.floor(Math.random() * femaleFirstNamesArrayLength)];
        }
    }

    getRandomLastName(){
        return lastNamesArray[Math.floor(Math.random() * lastNamesArrayLength)];
    }

    getRandomBirthDate(){
        var year = Math.floor(Math.random() * (1997 - 1940) + 1940); // 18 - 75 years old
        var month = Math.floor(Math.random() * (12 - 1) + 1);
        var day = Math.floor(Math.random() * (28 - 1) + 1); // this is probably dangerous
        return `${year}-${month}-${day}`;
    }

    getRandomAddress(){
        var houseNumber = Math.floor(Math.random() * (1000 - 1) + 1);
        var streetName = streetNamesArray[Math.floor(Math.random() * streetNamesArrayLength)];
        var zipCode = zipCodesArray[Math.floor(Math.random() * zipCodesArrayLength)];
        //var city = zipCode.cityState.split(", ")[0];
        //var state = zipCode.cityState.split(", ")[1];
        //var zip = zipCode.code;
        return `${houseNumber} ${streetName}; ${zipCode.cityState} ${zipCode.code}`;
    }

    getAge(){
        return 2015 - parseInt(this.birthDate.split('-')[0]);
    }

}