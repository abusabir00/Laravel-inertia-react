import { Link } from "@inertiajs/react";

export default function Pagination({ meta }) {
    console.log('meta',meta);
    return (
        
        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-900">
                Showing {meta.from} to {meta.to} of {meta.total} Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                {meta.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || '#'}
                        className={`text-xs xs:text-sm text-gray-500 hover:text-gray-700 px-3 py-1 mx-1 rounded-md ${
                            link.active
                                ? 'bg-gray-800 text-white'
                                : 'bg-gray-200'
                        } ${link.url ? '' : 'pointer-events-none' }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    >
                    </Link>
                ))}
                
                    
            </div>
        </div>
    );

}