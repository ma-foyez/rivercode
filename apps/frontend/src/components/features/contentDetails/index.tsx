
interface IContentDetails {
    content: string;
    customClass?: string;
}
const ContentDetails = ({ content, customClass }: IContentDetails) => {
    return (
        <p className={`${customClass} my-2 text-base md:text-lg lg:text-xl text-[#5E646B] font-normal `}>{content}</p>
    );
};

export default ContentDetails;