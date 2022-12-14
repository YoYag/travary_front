import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="form-control">
        <input
          id="pac-input"
          type="text"
          placeholder="Search…"
          className="input input-bordered w-full h-8 max-w-xs"
          ref={(ref) => (this.input = ref)}
        />
        {/* <div className="input-group">
          <input
            id="pac-input"
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full"
            ref={(ref) => (this.input = ref)}
          />
          <button className="btn btn-square" onClick={this.search}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div> */}
      </div>
    );
  }

  onPlacesChanged = ({ mapData, mapApiData, addPlace } = this.props) => {
    const selected = this.searchBox.getPlaces();
    // const { 0: place } = selected;

    // 새로운 LatLngBounds 객체 생성
    let bounds = new mapApiData.LatLngBounds();

    selected.forEach((place) => {
      if (!place.geometry) return;

      if (place.geometry.viewport) {
        // 객체의 좌표 경계와 현재 좌표 경계를 모두 포함하는 새로운 좌표 경계 객체를 반환
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
        // mapData.setZoom(14);
      }
    });

    mapData.fitBounds(bounds);
    addPlace(selected);
  };

  componentDidMount({ mapData, mapApiData } = this.props) {
    this.searchBox = new mapApiData.places.SearchBox(this.input);

    // searchBox에서 장소 선택 시, 이벤트 발생
    this.searchBox.addListener("places_changed", this.onPlacesChanged);

    // searchBox 결과가 map화면에 보여지며 해당 위치로 viewport가 이동
    this.searchBox.bindTo("bounds", mapData);
  }

  componentWillUnmount({ mapApiData } = this.props) {
    mapApiData.event.clearInstanceListeners(this.input);
  }
}

export default SearchBar;
