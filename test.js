const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


var val = {
    "accountNumber": {
      "value": "740561073"
    },
    "requestedShipment": {
      "shipper": {
        "address": {
          "postalCode": 65247,
          "countryCode": "US"
        }
      },
      "recipient": {
        "address": {
          "postalCode": 75063,
          "countryCode": "US"
        }
      },
      "pickupType": "DROPOFF_AT_FEDEX_LOCATION",
      "serviceType": "FEDEX_1_DAY_FREIGHT",
      "rateRequestType": [
        "LIST",
        "ACCOUNT"
      ],
      "requestedPackageLineItems": [
        {
          "weight": {
            "units": "LB",
            "value": 151
          },
          "dimensions": {
            "length": 30,
            "width": 30,
            "height": 40,
            "units": "IN"
          }
        }
      ]
    }
  }

var searchURL = 'https://apis-sandbox.fedex.com/rate/v1/rates/quotes';

async function postData(url) {
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'x-customer-transaction-id': "624deea6-b709-470c-8c39-4b5511281492",
            'Content-Type': 'application/json',
            'X-locale': 'en_US',
            'Accept': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsN2YxYzFkMjMzMDA0YzQ3MTc5NTcwZGY3Y2FjOGEwOTA1In0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjMwLU5vdi0yMDIyIDEzOjAwOjQxIEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1wcm9kLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE2Njk4MzQ4NDEsImp0aSI6IjE3MWQ3YWVjLWFiOGItNGYyZi04YzQzLWVkMTMyYzFlMmIyZCJ9.lGbuSi44QjtS3zhG0lpTcwBR___3gWxIwkV60zSwAgdWbf59iNc7QK5-mLcVB34mWHqPGveRfv-Qj7l-4LdXcjPKCmToamSg-vFOf99EFQBcJFj0CiPkDXimIe-dAizGtqvFF5JN--x9eSS-d1bWUBitIQRHJSkfoTE4fZjqMKEgEMm-sFscNpiUTN3JrOC3KJJW-h5dElHlpuaO7o4VwOK45_6hYoAmF4xl-kur2GtN29Dl1t9D3a8DiNo8kyBhlPsja5adFRptxl7bbkydu13mAONL8CHSMphWJYc2Pg7-y67VI6oE2jYRvB7man68H_FgbmwA-uYFOL3-RcDHeQwhqeraXGW1Hu3lkWXuSSSnCm1TmVb70b5n-eWQoUKZ6bziRFbdXwm5mf1YEzU6UFWYoRjrE-JtCn80N0KGn_keaJMBgLAg7Hj-IpSOnDTTTzxlF796cZ6ChKKaNDW0L9zpi8t4SwvZ1eSRk_pCfFKq7DMVk8IIFyztt5MLOK-FuRJoNgFsFyu1dWVkNkoy9Smzh1ynccg7EceIXzFPOcL9SRHcK4YlPbpkm1JpOFLi7DDr_sG45wMmsDyC_0rovfLtR53oiihaDwO-3811jfRPVxVom6aL6mnXxue1iYNkQcZ6OdRZPbN5WwSFfhYPUc-gsIu3yZqSXKY2WUfMZLo'
        },
        credentials : true,
        body: JSON.stringify(val),
    });
    return response.json(); 
}

postData(searchURL)
    .then((data) => {
        console.log(data); 
        console.log('============= rateReplyDetails: ')
        console.log(data.output.rateReplyDetails)
    });

    