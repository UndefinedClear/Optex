import virustotal from '@api/virustotal';

const API = "15fe05f4310bcacd4e669d1abe109cfbb86e11f5ebe7a3b5703749c1227a5021";

virustotal.postFiles({file: 'server.sh'}, {
  'x-apikey': API
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));