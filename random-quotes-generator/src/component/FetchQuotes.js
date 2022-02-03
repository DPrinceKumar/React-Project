import axios from "axios";

const FetchQuotes = (setQuoteText) => {
    return (
        axios.get("https://api.quotable.io/random")
            .then(response => {
                // console.log("res()==> " + response.data.content)
                setQuoteText(response.data.content);
            })
            .catch((error) => {
                console.log(error);
            })
    );
};

export default FetchQuotes;
