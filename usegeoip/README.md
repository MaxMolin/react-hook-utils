# 📍 useGeoIp

Simple React hook for getting extensive geolocation data on current user IP address.

## 🚀 Getting Started

### Usage of the useGeoIp React hook

Add to your project `npm i usegeoip` or using yarn `yarn add usegeoip`.

Simply import the hook in your component.

`import useGeoIp from 'usegeoip';`

Then you can destruct any of the available properties from the hooks return value 
(object). _Please note that it will be empty object until result is presented thus 
regular nullcheck higher in the hierarchy might be in place._
 
`const { country } = useGeoIp();`


### Available properties

* businessName
* businessWebsite
* city
* continent
* country
* countryCode
* ipName
* ipType
* isp
* lat
* lon
* org
* query
* region
* status

_All properties typed as strings._


If there's trouble there will only be one property in the response, namely _**error**_ containing a javascript error.
