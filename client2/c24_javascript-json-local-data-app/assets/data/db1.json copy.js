var pJSON =
{
  countries: [
    {
      Code: 'AZE',
      Name: 'Azerbaijan',
      Continent: 'Asia',
      SurfaceArea: '86,600',
      Population: '7,734,000'
    }
  ],
  cities: [
    { CountryCode: 'AZE', CityName: 'Baku', Population: '1,787,800' },
    { CountryCode: 'AZE', CityName: 'GÃ¤ncÃ¤', Population: '299,300' },
    {
      CountryCode: 'AZE',
      CityName: 'MingÃ¤Ã§evir',
      Population: '93,900'
    },
    { CountryCode: 'AZE', CityName: 'Sumqayit', Population: '283,000' }
  ]
}

  if ( typeof( process ) == 'object' ) { var util  =  require('util');      console.log( util.inspect( pJSON, { depth: 99 , maxArrayLength: 2 } ) ) }