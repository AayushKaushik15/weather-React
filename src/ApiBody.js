

const ApiBody = () => {
    return (
        <div className="apibody">
            <h1>How to make an API call <b>?</b></h1>
            <h3>Example of API response</h3>

            <details>
                Get essential weather data, short-term and long-term forecasts and aggregated weather data is easy with our OpenWeather One Call API 3.0. This product designed to ensure easy migration from the Dark Sky API.
            </details>

            <div className="box-info-api">
                <p>Please note, that One Call API 3.0 is included in the "One Call by Call" subscription only. This separate subscription includes 1,000 calls/day for free and allows you to pay only for the number of API calls made to this product. Please note, that you do not need to subscribe to any other OpenWeather subscription plans to get access to the One Call API 3.0. Please find more details on the pricing page and FAQ.</p>
            </div>

            <div className="start">
                <h4>How to start</h4>
                <ol>
                    <li>Sign up to OpenWeather service in case you haven't got your OpenWeather API key yet.</li>
                    <li>Follow the pricing page to learn details about the price.</li>

                    <div className="box-info-api">
                        <p>One Call API 3.0 is included in the separate subscription only and allows you to pay only for the number of API calls made to this product. Please find more details on the pricing page.</p>
                    </div>
                    <li>Once you subscribe to One call API 3.0, 2000 API calls per day to this product are set up by default. If you want to change this limit, please go to the "Billing plans" tab in your Personal account to update standard settings. You can find more information on the FAQ.</li>
                    <li>Select the desired type of data (Current and forecasts weather data, Weather data for timestamp, Daily aggregation) and make an API call according to relevant tech documentation section, remembering to add your key to each call.</li>
                </ol>
            </div>

        </div>
    )
}

export default ApiBody;