import numeral from 'numeral';

const FormatNumeral = ({ format, children, text }) => {

    return (

        <span>

            {`${numeral(children).format(format)} ${text}`}

        </span>

    );

}

export default FormatNumeral;