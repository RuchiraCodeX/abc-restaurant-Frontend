import React from 'react';

const About2 = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-12">About ABC Restaurant</h1>

            
            <section className="mb-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src="https://d4t7t8y8xqo0t.cloudfront.net/app/resized/600X350/restaurant%2F110441%2Frestaurant220220514105436.jpg"
                            alt="ABC Restaurant"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Welcome to ABC Restaurant</h2>
                        <p className="text-gray-700 text-lg">
                            ABC Restaurant has been serving the community with delicious, authentic cuisine for over 20 years. Our passion for food and dedication to quality has made us a beloved spot for both locals and visitors. Whether you're here for a quick bite or a special occasion, we strive to provide a memorable dining experience.
                        </p>
                    </div>
                </div>
            </section>

            
            <section className="mb-12">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                        <p className="text-gray-700 text-lg">
                            Founded by Chef John Doe in 2002, ABC Restaurant started as a small family-owned eatery with a mission to bring the flavors of Italy to the heart of the city. Over the years, we have grown into a well-known establishment, expanding our menu to include a variety of international dishes while staying true to our roots.
                        </p>
                        <p className="text-gray-700 text-lg mt-4">
                            Our commitment to using fresh, high-quality ingredients has remained unchanged, and our passion for hospitality continues to drive us. We believe in creating a warm, welcoming atmosphere where everyone feels at home.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="https://cdn.tatlerasia.com/tatlerasia/i/2022/02/11182819-taro-takayama_cover_1500x1000.jpg"
                            alt="Our Story"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </section>

           
            <section className="mb-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src="https://media.thepeakmagazine.com.sg/public/2022/06/Imamura-Japanese-craftsmanship-restaurants-singapore.jpg"
                            alt="Our Chefs"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Meet Our Chefs</h2>
                        <p className="text-gray-700 text-lg">
                            Our team of talented chefs is at the heart of ABC Restaurant's success. Each chef brings a unique set of skills and a deep love for culinary arts, ensuring that every dish is crafted with care and attention to detail.
                        </p>
                        <p className="text-gray-700 text-lg mt-4">
                            From our head chef, who has been with us since day one, to our newest members, everyone in our kitchen shares the same dedication to quality and innovation. We continuously explore new techniques and flavors to keep our menu fresh and exciting.
                        </p>
                    </div>
                </div>
            </section>

            
            <section className="mb-12">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <p className="text-gray-700 text-lg">
                            At ABC Restaurant, we believe that great food starts with great ingredients. That's why we source our produce, meats, and seafood from trusted local suppliers who share our commitment to sustainability and quality.
                        </p>
                        <p className="text-gray-700 text-lg mt-4">
                            We also believe in giving back to the community that has supported us over the years. From charity events to partnerships with local farms, we're proud to contribute to the well-being of our neighborhood.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="https://www.kinesisinc.com/wp-content/uploads/2013/10/core-values-part2.jpg"
                            alt="Our Values"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </section>

           
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-4">Join Us for an Unforgettable Dining Experience</h2>
                <p className="text-gray-700 text-lg mb-8">
                    Whether you're a long-time customer or visiting us for the first time, we invite you to enjoy a meal at ABC Restaurant. We look forward to serving you and making your dining experience one to remember.
                </p>
                <button onClick={"/login"} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Make a Reservation
                </button>
            </section>
        </div>
    );
};

export default About2;
