export const getTokenFromURL = () => {
  return window.location.hash.substring(0).split('#')
      .reduce((initial, item) => {
        // #accessToken=mySecret&name=someName
        let parts = item.split("=");
        console.log(parts);
        initial = decodeURIComponent(parts[1])

        return initial;
      })
}