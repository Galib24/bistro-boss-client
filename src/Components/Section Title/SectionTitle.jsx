

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-4">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <div className="divider"></div>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTitle;