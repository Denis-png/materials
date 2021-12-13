class Lesson6 {
    leaflet_project_script() {
        // you dont have to use it. full html and css file uploaded here as Lesson6.html .css
        //Map initialization
        const map = L.map("mapid").setView([50.130681, 14.373853], 18);

        //Add tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        //Add pointer
        //L.marker([50.131288684243174, 14.37329579377547]).addTo(map);

        //marker text
        /* L.marker([50.13124336249122, 14.373243805021051])
          .addTo(map)
          .bindPopup("This is Faculty of Economics and Management");
        //.openPopup(); */

        //custom marker
        const myIcon = L.icon({
            iconUrl: "./cs_PEF.png",
            iconSize: [38, 38],
            iconAnchor: [22, 37],
            popupAnchor: [0, -35],
        });

        //use custom marker
        L.marker([50.13124336249122, 14.373243805021051], {
            icon: myIcon,
        })
            .addTo(map)
            .bindPopup("This is Faculty of Economics and Management");
        //.openPopup();

        /* map.on("click", (e) => {
          console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
        }); */

        //polygon
        const polygon = L.polygon(
            [
                [50.13169673926953, 14.372999640181662],
                [50.13137005911273, 14.37306937761605],
                [50.13135979659141, 14.372965693473818],
                [50.13117748871239, 14.373010369017722],
                [50.13118436624002, 14.373117657378318],
                [50.130720130905765, 14.373241038993003],
                [50.13065135491765, 14.37254902906716],
                [50.130458781625144, 14.372602673247458],
                [50.130534435511045, 14.373493166640403],
                [50.13120156005479, 14.3732946831733],
                [50.13128409027976, 14.3740510661155],
                [50.13114310105935, 14.374099345877768],
                [50.13117061118376, 14.374276371672751],
                [50.131301284058715, 14.374244185164573],
                [50.13132535533885, 14.374372931197287],
                [50.131493853960876, 14.37431928701699],
                [50.131493853960876, 14.374185176566245],
                [50.131827410707785, 14.374088617041709],
                [50.13180677839916, 14.373916955664756],
                [50.131466344022314, 14.374002786353232],
                [50.13139069160967, 14.373262496665122],
                [50.131727687800314, 14.373165937140586],
                [50.13170361672253, 14.372988911345603],
            ],
            /* { color: "grey", opacity: 0.5 } */
            { color: "grey", opacity: 0.5 }
        ).addTo(map);

        //change polygon styles - regular function
        /* polygon.on("mouseover", function () {
          this.setStyle({
            color: "red",
          });
        });
  
        polygon.on("mouseout", function () {
          this.setStyle({
            color: "grey",
          });
        }); */

        //change polygon styles - arrow function
        polygon.on("mouseover", (e) => {
            e.target.setStyle({
                color: "red",
            });
        });

        polygon.on("mouseout", (e) => {
            e.target.setStyle({
                color: "grey",
            });
        });

        /* L.Routing.control({
          waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
        }).addTo(map); */

        //routing
        L.Routing.control({
            waypoints: [
                L.latLng(50.13330431702395, 14.377029198221862),
                L.latLng(50.10263771849553, 14.39462702488527),
            ],
        }).addTo(map);

      //50.13330431702395, 14.377029198221862 - ÈZU
      //50.10263771849553, 14.39462702488527 - DEJVICE
    }
}