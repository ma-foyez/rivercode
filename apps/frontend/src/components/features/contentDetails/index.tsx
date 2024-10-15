
interface IContentDetails {
    content: string;
    customClass?: string;
}
const ContentDetails = ({ content, customClass }: IContentDetails) => {
    return (
        <p className={`${customClass} my-2 text-sm md:text-base 2xl:text-xl text-[#5E646B] font-normal `}>{content}</p>
    );
};

export default ContentDetails;