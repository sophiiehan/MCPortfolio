
interface BuildCardProps {
    title: string;
    description: string;
}

const BuildCard = ({ title, description }: BuildCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default BuildCard;