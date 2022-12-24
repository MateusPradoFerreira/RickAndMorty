function FlexCotainer(props) {
    return (
        <div className="l-flexContainer" style={{justifyContent: props.justify}}>
            {props.children}
        </div>
    );
}

export default FlexCotainer;