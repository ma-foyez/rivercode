/**
 * Loading content during the initial page render.
 * @returns 
 */
const MainLoader = () => {
    return (
        <div>
            <div className="fixed inset-0 z-40 bg-white"></div>
            <div className="page_loading z-50">
            </div>
        </div>
    );
};

export default MainLoader;