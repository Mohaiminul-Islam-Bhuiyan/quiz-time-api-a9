import React from 'react';
import Topic from './Topic';

const Home = () => {
    return (
        <div>
            <section>
                <div className='grid grid-cols-3 gap-4 mt-5 mx-5 items-center'>
                <div>
                    <img className='h-80' src="../quizFavicon.jpg" alt="" />
                </div>
                <div className='col-span-2'>
                    <p>
                        Start your journey with us. we are here to asses your knowledge and find the strong points inside you and the points you need to improve.
                    </p>
                </div>
                </div>
                <Topic></Topic>
            </section>
        </div>
    );
};

export default Home;