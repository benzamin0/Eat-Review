import React, {useState} from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import './map.scss';

function Map() {

    const [ncpClientId, setNcpClientId] = useState('n5wvr5qr9r');

    return (

        <div className="map">
            <RenderAfterNavermapsLoaded
  ncpClientId={ncpClientId}
  error={<p>Maps Load Error</p>}
  loading={<p>Maps Loading...</p>}
>
<NaverMap className="map_naver"
    mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
    defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
    defaultZoom={10}
  />
</RenderAfterNavermapsLoaded>
        </div>

    );
}

export default Map;