// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_key: '497a0fef11467319273d3acfe35fa144', // moviedb auth key
  x_apikey: '6322a3604b91c00c197f61f1', //restdbio auth key

  moveapi_baseurl : 'https://api.themoviedb.org/3/',
  image_url: 'https://image.tmdb.org/t/p/w500',
  trending_all_week: 'trending/all/week',
  movie_details: 'movie/',

  restdbapi_baseurl: 'https://moviedb-4d55.restdb.io/rest/',
  userfavorite_collection: 'userfavorite',
  userwatchlist_collection: 'userwatchlist'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
