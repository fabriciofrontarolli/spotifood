import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { If, Then } from 'react-if'

const FeaturedPlaylists = ({ filters, playlists }) => (
    <div className="container featured-playlists-container">
        <div className="row">
            <If condition={playlists.length}>
                <Then>
                    {
                        playlists.map(playlist => (
                            <Card className="col-md-6 col-sm-12 playlist-item" key={playlist.id}>
                                <Card.Img variant="top" src={playlist.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{ playlist.name }</Card.Title>
                                    <Card.Text>
                                        image
                                    </Card.Text>
                                    <Button variant="light">Ouvir Playlist</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Then>
            </If>
            <If condition={filters.length && !playlists.length}>
                <Then>
                    <h5>Nenhum resultado encontrado para esse filtro! &nbsp; =/</h5>
                </Then>
            </If>
        </div>
    </div>
);

FeaturedPlaylists.propTypes = {
    playlists: PropTypes.array.isRequired
}

FeaturedPlaylists.defaultProps = {
    playlists: []
}

export default FeaturedPlaylists;

// TODO: prop types