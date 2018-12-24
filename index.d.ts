// Type definitions for Leaflet.markercluster 1.0
// Project: https://github.com/Leaflet/Leaflet.markercluster
// Definitions by: Robert Imig <https://github.com/rimig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


    class MarkerCluster extends Marker {
        getAllChildMarkers(): Marker[];
        getChildCount(): number;
        zoomToBounds(): void;
        getBounds(): LatLngBounds;
    }

    interface MarkerClusterGroupOptions extends LayerOptions {

        showCoverageOnHover?: boolean;
        zoomToBoundsOnClick?: boolean;
        spiderfyOnMaxZoom?: boolean;
        removeOutsideVisibleBounds?: boolean;
        animate?: boolean;
        animateAddingMarkers?: boolean;
        disableClusteringAtZoom?: number;
        maxClusterRadius?: number | ((zoom: number) => number);
        polygonOptions?: PolylineOptions;
        singleMarkerMode?: boolean;
        spiderLegPolylineOptions?: PolylineOptions;
        spiderfyDistanceMultiplier?: number;
        iconCreateFunction?: ((cluster: MarkerCluster) => Icon | DivIcon);
        chunkedLoading?: boolean;
        chunkDelay?: number;
    }

    class MarkerClusterGroup extends FeatureGroup {
      
        addLayers(layers: Layer[]): this;
        removeLayers(layers: Layer[]): this;
        clearLayers(): this;
        getVisibleParent(marker: Marker): Marker;
        refreshClusters(clusters?: Marker | Marker[] | LayerGroup | {[index: string]: Layer}): this;
        getChildCount(): number;
        getAllChildMarkers(): Marker[];
        hasLayer(layer: Layer): boolean;
        zoomToShowLayer(layer: Layer, callback?: () => void): void;
    }

    function markerClusterGroup(options?: MarkerClusterGroupOptions): MarkerClusterGroup;
