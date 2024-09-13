import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';
import { TiLocation } from "react-icons/ti";
import { MdContactPage } from "react-icons/md";

import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";

export default function Search({ initialUsers, initialQuery }) {
    const router = useRouter();
    const { query } = router.query;
   
    const [users, setUsers] = useState(initialUsers || []);
    const [searchQuery, setSearchQuery] = useState(initialQuery || '');
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(false);

    // Fetch data based on the current query
    const fetchData = (searchQuery) => {
        setLoading(true);
        setError(null);

        fetch(`/api/user?search=${searchQuery}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(true);
                setLoading(false);
            });
    };

    // Trigger search when the user "Enter"
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData(searchQuery);
        }
    };

    // Trigger a new search if  query is changed
    useEffect(() => {
        if (initialQuery) {
            fetchData(initialQuery);
        }
    }, [initialQuery]);

    return (
        <div>
            <div className="flex mt-6 nave-search">
                {/* Logo */}
                <div className="flex items-center align-center mb-4">
                    <Image
                        src="/images/logoM.svg"
                        alt="Logo"
                        width={159}
                        height={45}
                    />
                </div>
                <div className="relative max-w-lg text-black border-black glass mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full py-2 pl-12 pr-28 text-black-700 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="search-main mt-6">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <div className="err">
                        <Image
                            src="/images/bg.svg"
                            className="logo-profile"
                            alt="Logo"
                            width={350}
                            height={45}
                        />
                        <p className="error-text">No Result Found.</p>
                    </div>
                ) : users.length === 0 ? (
                    <div className="err">
                        <Image
                            src="/images/bg.svg"
                            className="logo-profile mb-0 pb-0"
                            alt="Logo"
                            width={350}
                            height={45}
                        />
                        <p>No Result Found</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-64">
                        {users.map((user) => (
                            <Card key={user.contact_number} className="w-[300px] h-[280px]">
                                <CardHeader className="centers">
                                    <Image
                                        src="/images/profile.jpg"
                                        className="logo-profile"
                                        alt="Logo"
                                        width={100}
                                        height={45}
                                    />
                                    <CardTitle>{user.name}</CardTitle>
                                    <CardDescription className="flex"><TiLocation /> {user.location}</CardDescription>
                                </CardHeader>
                                <CardFooter className="text-small">
                                    <div className="mr-8">
                                        <p className="text-sm flex"><MdContactPage />  { user.contact_number}</p>
                                        <p>Available on Phone</p>
                                    </div>
                                    <DialogDemo userName={user.name} location={user.location} number ={user.contact_number} />
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// Dialog component to display details
export function DialogDemo({userName, location , number}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-white bg-black" variant="outline">Fetch Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[350px] h-[350px]">
                <DialogHeader>
                    <DialogTitle className="text-gray-900">Fetch Details</DialogTitle>
                    <DialogDescription className="text-gray-700">
                        Here are the details following of employee.
                        <br></br>
                        <br></br>


                        <h3>Name: {userName}</h3>
                        <h3>Location: {location}</h3>
                        <h3>Contact Number: {number}</h3>
                        
                        <h3>Profile Image:</h3>
                        <Image
                                        src="/images/profile.jpg"
                                        
                                        alt="Logo"
                                        width={100}
                                        height={45}
                                    />
                                    <br></br>
                                    <DialogFooter>
                                    <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
            
        </Dialog>
    );
}

// Fetch data server-side and pass it as props
export async function getServerSideProps(context) {
    const { query } = context.query;
    let data = [];
    let error = null;

    try {
        const res = await fetch(`https://your-api-url.com/api/users?search=${query}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        data = await res.json();
    } catch (err) {
        console.error('Error during data fetching:', err);
        error = 'Failed to fetch users. Please try again later.';
    }

    return {
        props: {
            initialUsers: data || [],
            initialQuery: query || '',
        },
    };
}
