import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';

export default function UserNavbar({ headerName, children, successMessage, errorMessage }) {
        return (
            <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    { headerName }
                </h2>
            }
            menu={
                <>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </NavLink>
                    <NavLink href={route('users.index')} active={route().current('users.*')}>
                        Users
                    </NavLink>
                    <NavLink href={route('businesses.index')} active={route().current('businesses.*')}>
                        Businesses
                    </NavLink>
                </>
            }
            successMessage={successMessage}
            errorMessage={errorMessage}
        >
            {children}
            
        </AuthenticatedLayout>
    );
}
