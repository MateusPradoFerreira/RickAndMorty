import useCurrentPageStore from "../store/useCurrentPageStore";

function Pagination(props) {
    const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage);
    const currentPage = useCurrentPageStore((state) => state.currentPage);
    var Nbuttons = Math.ceil(props.totalCount / props.pageSize);
    const buttons = [];
    var i = 1;

    while (i <= Nbuttons) {

        if (i >= props.currentPage - props.siblingCount && i <= props.currentPage + props.siblingCount) {
            var display = ''
        } else {
            var display = 'none'
        }

        buttons.push({
            index: i,
            display: display,
            currentPage: props.currentPage === i ? true : false
        });
        i++;
    }

    function onNext() {
        if (props.currentPage < Nbuttons) {
            setCurrentPage(currentPage + 1);
        }
    };

    function onPrevious() {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="c-pagination">
            <button className="c-pagination__BToff" onClick={onPrevious}>{'<'}</button>
            {buttons.map((button) => (
                <button
                    style={{ display: button.display }}
                    key={button.index}
                    className={'c-pagination' + (button.currentPage === true ? '__BTon' : '__BToff')}
                    onClick={() => setCurrentPage(button.index)} >
                    {button.index < 10 ? '0' + button.index : button.index}
                </button>
            ))}
            <button className="c-pagination__BToff" onClick={onNext}>{'>'}</button>
        </div>
    );
}

export default Pagination;