/* eslint-disable global-require */
// import { XMLHttpRequest } from 'xmlhttprequest';

if (typeof XMLHttpRequest === 'undefined') {
  global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
}

// import axios from 'axios';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// export const predict = arr => {
//   // eslint-disable-next-line no-console
//   console.log(arr);
//   const data = JSON.stringify({
//     Inputs: {
//       input1: {
//         ColumnNames: [
//           'age',
//           'education',
//           'marital-status',
//           'relationship',
//           'race',
//           'sex',
//         ],
//         Values: [arr],
//       },
//     },
//     GlobalParameters: {},
//   });

//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization:
//       'Bearer MGzDp5o/UnLNR2cXFhm2/Li1Mkrg05UWNvqdhrWbA5aGh7vpwOiv8MmpUgGDdUJRKzi/WcIKMBoC0L3+XTcvdg==',
//   };

//   axios
//     .post(
//       'https://ussouthcentral.services.azureml.net/workspaces/da18f8eee6064b92862404275a376f38/services/fac09495d746436c918687181ea00b1c/execute?api-version=2.0&details=true',
//       // eslint-disable-next-line no-undef
//       data,
//       {
//         headers,
//       },
//     )
//     .then(response => {
//       // eslint-disable-next-line no-console
//       console.log(response);
//     })
//     .catch(error => {
//       // eslint-disable-next-line no-console
//       console.log(error);
//     });
// };

export const predict = arr => {
  const data = JSON.stringify({
    Inputs: {
      input1: {
        ColumnNames: [
          'age',
          'education',
          'marital-status',
          'relationship',
          'race',
          'sex',
        ],
        Values: [arr],
      },
    },
    GlobalParameters: {},
  });

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  // eslint-disable-next-line func-names
  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === 4) {
      // eslint-disable-next-line no-console
      console.log(this.responseText);
    }
  });

  xhr.open(
    'POST',
    'https://ussouthcentral.services.azureml.net/workspaces/da18f8eee6064b92862404275a376f38/services/fac09495d746436c918687181ea00b1c/execute?api-version=2.0&details=true',
  );
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader(
    'Authorization',
    'Bearer MGzDp5o/UnLNR2cXFhm2/Li1Mkrg05UWNvqdhrWbA5aGh7vpwOiv8MmpUgGDdUJRKzi/WcIKMBoC0L3+XTcvdg==',
  );
  xhr.setRequestHeader('cache-control', 'no-cache');
  xhr.setRequestHeader('Postman-Token', '7f6b4d49-a250-40a5-a8bf-ac699fb1a3b0');
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

  xhr.send(data);
};
