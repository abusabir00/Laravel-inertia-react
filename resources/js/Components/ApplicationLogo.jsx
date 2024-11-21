export default function ApplicationLogo(props) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    return (
        <img
            src="/img/logo.png"
            className="block w-auto h-12 text-gray-800 fill-current"
            onError={handleImageError}
        /> 
    );
}
