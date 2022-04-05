export const allFlights = [
    {
        airlines:'British Airways',
        imgHandle:'british.png',
        departure: {
            name : 'Allahabad',
            code : 'ALD',
            state : 'UP',
            country : 'India'
          },
        destination: {
            name : 'Pune',
            code : 'PUN',
            state : 'Maharashtra',
            country : 'India'
          },
        departureDate: new Date("2022-04-22"),
        departTime:"02:30am",
        arrivalTime:"04:50am",
        travelTime:"02h 20m",
        stoppageCities:[    {
            name : 'Lucknow',
            code : 'LKO',
            state : 'UP',
            country : 'India'
          }],
        numOfStoppages:1,
        fareOptions: [
            {
                price:120,
                cabinClass:"Luxury"
            },
            {
                price:65,
                cabinClass:"Economy"
            },
            {
                price:178,
                cabinClass:"Business"
            },
            {
                price:350,
                cabinClass:"Luxury"
            }
        ],
        travelClasses : [
            {
                name:'Economy',
                code:'ECO'
              },
              {
                name:'Business',
                code:'BSO'
              },
              {
                name:'Luxury',
                code:'LXO'
              }
        ]
    },
    {
        airlines:'Lufthansa',
        imgHandle:'lufthansa.png',
        departure: {
            name : 'Allahabad',
            code : 'ALD',
            state : 'UP',
            country : 'India'
          },
        destination:     {
            name : 'Lucknow',
            code : 'LKO',
            state : 'UP',
            country : 'India'
          },
        departureDate: new Date("2022-04-21"),
        departTime:"08:30am",
        arrivalTime:"09:00am",
        travelTime:"0h 30m",
        stoppageCities:[    {
            name : 'Lucknow',
            code : 'LKO',
            state : 'UP',
            country : 'India'
          }],
        numOfStoppages:1,
        fareOptions: [
            {
                price:100,
                cabinClass:"Luxury"
            },
            {
                price:45,
                cabinClass:"Economy"
            },
            {
                price:88,
                cabinClass:"Business"
            }
        ],
        travelClasses : [
            {
                name:'Economy',
                code:'ECO'
              },
              {
                name:'Business',
                code:'BSO'
              },
              {
                name:'Luxury',
                code:'LXO'
              }
        ]
    },
    {
        airlines:'British Airways',
        imgHandle:'british.png',
        departure:     {
            name : 'Pune',
            code : 'PUN',
            state : 'Maharashtra',
            country : 'India'
          },
        destination:     {
            name : 'Gurgaon',
            code : 'GRAO',
            state : 'Haryana',
            country : 'India'
          },
        departureDate: new Date("2022-04-22"),
        departTime:"02:30am",
        arrivalTime:"04:50pm",
        travelTime:"14h 20m",
        stoppageCities:[    {
            name : 'Lucknow',
            code : 'LKO',
            state : 'UP',
            country : 'India'
          }],
        numOfStoppages:1,
        fareOptions: [
            {
                price:120,
                cabinClass:"Luxury"
            },
            {
                price:65,
                cabinClass:"Economy"
            },
            {
                price:178,
                cabinClass:"Business"
            },
            {
                price:350,
                cabinClass:"Luxury"
            }
        ],
        travelClasses : [
            {
                name:'Economy',
                code:'ECO'
              },
              {
                name:'Business',
                code:'BSO'
              },
              {
                name:'Luxury',
                code:'LXO'
              }
        ]
    },
    {
        airlines:'American Airlines',
        imgHandle:'american.jfif',
        departure:     {
            name : 'Pune',
            code : 'PUN',
            state : 'Maharashtra',
            country : 'India'
          },
        destination:     {
            name : 'Ahemdabad',
            code : 'AHD',
            state : 'Gujrat',
            country : 'India'
          },
        departureDate: new Date("2022-04-21"),
        departTime:"02:30am",
        arrivalTime:"04:50pm",
        travelTime:"14h 20m",
        stoppageCities:[    {
            name : 'Lucknow',
            code : 'LKO',
            state : 'UP',
            country : 'India'
          }],
        numOfStoppages:1,
        fareOptions: [
            {
                price:120,
                cabinClass:"Luxury"
            },
            {
                price:65,
                cabinClass:"Economy"
            },
            {
                price:178,
                cabinClass:"Business"
            },
            {
                price:350,
                cabinClass:"Luxury"
            }
        ],
        travelClasses : [
            {
                name:'Economy',
                code:'ECO'
              },
              {
                name:'Business',
                code:'BSO'
              },
              {
                name:'Luxury',
                code:'LXO'
              }
        ]
    },
    {
        airlines:'British Airways',
        imgHandle:'british.png',
        departure:     {
            name : 'Ahemdabad',
            code : 'AHD',
            state : 'Gujrat',
            country : 'India'
          },
        destination:     {
            name : 'Jaipur',
            code : 'JPR',
            state : 'Rajasthan',
            country : 'India'
          },
        departureDate: new Date("2022-04-21"),
        departTime:"03:00pm",
        arrivalTime:"04:50pm",
        travelTime:"1h 50m",
        stoppageCities:[        {
            name : 'Gurgaon',
            code : 'GRAO',
            state : 'Haryana',
            country : 'India'
          }],
        numOfStoppages:1,
        fareOptions: [
            {
                price:120,
                cabinClass:"Luxury"
            },
            {
                price:65,
                cabinClass:"Economy"
            },
            {
                price:178,
                cabinClass:"Business"
            },
            {
                price:350,
                cabinClass:"Luxury"
            }
        ],
        travelClasses : [
            {
                name:'Economy',
                code:'ECO'
              },
              {
                name:'Business',
                code:'BSO'
              },
              {
                name:'Luxury',
                code:'LXO'
              }
        ]
    },
    {
        airlines:'Ethopian',
        imgHandle:'ethopian.png',
        departure: {
            name : 'Allahabad',
            code : 'ALD',
            state : 'UP',
            country : 'India'
          },
        destination:     {
            name : 'Gurgaon',
            code : 'GRAO',
            state : 'Haryana',
            country : 'India'
          },
        departureDate: new Date("2022-04-22"),
        departTime:"02:30am",
        arrivalTime:"04:50pm",
        travelTime:"14h 20m",
        stoppageCities:[    {
            name : 'Lucknow',
            code : 'LKO',
            state : 'UP',
            country : 'India'
          }],
        numOfStoppages:1,
        fareOptions: [
            {
                price:120,
                cabinClass:"Luxury"
            },
            {
                price:65,
                cabinClass:"Economy"
            },
            {
                price:178,
                cabinClass:"Business"
            },
            {
                price:350,
                cabinClass:"Luxury"
            }
        ],
        travelClasses : [
            {
                name:'Economy',
                code:'ECO'
              },
              {
                name:'Business',
                code:'BSO'
              },
              {
                name:'Luxury',
                code:'LXO'
              }
        ]
    },
    {
      airlines:'Lufthansa',
      imgHandle:'lufthansa.png',
      departure: {
          name : 'Allahabad',
          code : 'ALD',
          state : 'UP',
          country : 'India'
        },
      destination: {
          name : 'Pune',
          code : 'PUN',
          state : 'Maharashtra',
          country : 'India'
        },
      departureDate: new Date("2022-04-22"),
      departTime:"08:30am",
      arrivalTime:"10:50am",
      travelTime:"02h 20m",
      stoppageCities:[    {
          name : 'Lucknow',
          code : 'LKO',
          state : 'UP',
          country : 'India'
        }],
      numOfStoppages:1,
      fareOptions: [
          {
              price:120,
              cabinClass:"Luxury"
          },
          {
              price:65,
              cabinClass:"Economy"
          },
          {
              price:178,
              cabinClass:"Business"
          },
          {
              price:350,
              cabinClass:"Luxury"
          }
      ],
      travelClasses : [
          {
              name:'Economy',
              code:'ECO'
            },
            {
              name:'Business',
              code:'BSO'
            },
            {
              name:'Luxury',
              code:'LXO'
            }
      ]
  },
]