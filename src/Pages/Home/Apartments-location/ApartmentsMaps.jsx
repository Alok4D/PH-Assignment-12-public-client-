

const ApartmentsMaps = () => {
    return (
    <div className="mt-8 mb-8">
            <div className="text-center mb-6">
            <h2 className="text-red-400 text-4xl italic">Apartments Map Location</h2>
            </div>
            <div className="responsive-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116823.80075113486!2d90.30448419423685!3d23.792136857099493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71117a2f979%3A0x694e6f1a3b384ded!2sSharif%20Furnished%20Apartments!5e0!3m2!1sen!2sbd!4v1720776242992!5m2!1sen!2sbd" width="100%" height="500" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
       
    );
};

export default ApartmentsMaps;