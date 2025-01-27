import PropTypes from 'prop-types';

export default function AnnouncementCard({value}){
    return (
        <div className="announcement-card">
            {value.content}
        </div>
    )
}

AnnouncementCard.propTypes = {
    value: PropTypes.shape({
        content: PropTypes.string.isRequired
    }).isRequired
};