(function($) {

    /*
    *  This function will render a Google Map onto the selected jQuery element
    */

    function new_map( $el ) {
        
        // var
        var $markers = $el.find('.marker');
        
        // vars
        var args = {
            zoom        : 16,
            center      : new google.maps.LatLng(0, 0),
            mapTypeId   : google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            draggable: false
        };
        
        // create map               
        var map = new google.maps.Map( $el[0], args);
        
        // add a markers reference
        map.markers = [];
        
        // add markers
        $markers.each(function(){
            
            add_marker( $(this), map );
            
        });
        
        // center map
        center_map( map );
        
        // return
        return map;
        
    }

    /*
    *  This function will add a marker to the selected Google Map
    */

    function add_marker( $marker, map ) {

        // var
        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

        // create marker
        var icon = 'img/map-marker.png' ; 

     // create marker
        var marker = new google.maps.Marker({
            position : latlng,
            map   : map,
            icon  : icon,
            scrollwheel: false,
            draggable: false,
        })

        // add to array
        map.markers.push( marker );

        // if marker contains HTML, add it to an infoWindow
        if( $marker.html() )
        {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content     : $marker.html()
            });

            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {

                infowindow.open( map, marker );

            });
        }

    }

    /*
    *  This function will center the map, showing all markers attached to this map
    */

    function center_map( map ) {

        // vars
        var bounds = new google.maps.LatLngBounds();

        // loop through all markers and create bounds
        $.each( map.markers, function( i, marker ){

            var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

            bounds.extend( latlng );

        });

        // only 1 marker?
        if( map.markers.length == 1 )
        {
            // set center of map
            map.setCenter( bounds.getCenter() );
            map.setZoom( 16 );
        }
        else
        {
            // fit to bounds
            map.fitBounds( bounds );
        }

    }

    /*
    *  This function will render each map when the document is ready (page has loaded)
    */
    // global var
    var map = null;

    $(document).ready(function(){

        $('.map-block').each(function(){

            // create map
            map = new_map( $(this) );
            
        });

    });

})(jQuery);
