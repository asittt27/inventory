import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Info,
    ArrowLeftFromLine,
    File,
    Pencil,
    Trash2
} from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableHeader from "../../components/TableHeader";
import TableCell from "../../components/TableCell";

const PcComponent = () => {
    const [pcs, setPCs] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [form, setForm] = useState({
        id: '',
        it_code: '',
        brand: '',
        serial_number: '',
        ip_address: '',
        status: '',
    });
    const [searchTerm, setSearchTerm] = useState(''); // Add state for search term

    useEffect(() => {
        fetchPCs();
    }, []);

    const fetchPCs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/pc');
            setPCs(response.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validasi: Periksa apakah semua field telah diisi
        if (!form.it_code || !form.brand || !form.serial_number || !form.ip_address || !form.status) {
            showAlert("Please fill in all fields before submitting.");
            return; // Hentikan eksekusi jika ada field yang kosong
        }

        try {
            if (form.id) {
                await axios.put(`http://localhost:5000/pc/${form.id}`, form);
            } else {
                await axios.post('http://localhost:5000/pc', form);
            }
            setForm({ id: '', it_code: '', brand: '', serial_number: '', ip_address: '', status: '' });
            fetchPCs();
            setFormVisible(false);
        } catch (err) {
            console.error(err.message);
        }
    };
    

    const handleEdit = (pc) => {
        setForm(pc);
        setFormVisible(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/pc/${id}`);
            fetchPCs();
        } catch (err) {
            console.error(err.message);
        }
    };

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
    };

    const showAlert = (message) => {
        const alertContainer = document.createElement('div');
        alertContainer.className = "absolute z-50 flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md";
    
        // Bagian ikon dan teks dari code kedua
        alertContainer.innerHTML = `
            <div class="flex items-center justify-center w-12 bg-blue-500">
                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                </svg>
            </div>
            <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                    <span class="font-semibold text-blue-500">Info</span>
                    <p class="text-sm text-gray-600">${message}</p>
                </div>
            </div>
        `;
    
        // Dapatkan elemen form untuk menempatkan alert di dekatnya
        const formElement = document.querySelector('form');
        formElement.style.position = 'relative'; // Pastikan form memiliki positioning relatif
        formElement.appendChild(alertContainer); // Tempatkan alert di dalam form
    
        // Animasi keluar
        setTimeout(() => {
            alertContainer.classList.add('scale-0');
            setTimeout(() => {
                formElement.removeChild(alertContainer);
            }, 300); // Waktu untuk animasi keluar
        }, 3000); // Tampilkan alert selama 3 detik
    };
    

    const pcsFiltered = pcs.filter(pc => 
        pc.it_code.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pc.ip_address.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pc.status.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pc.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pc.serial_number.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex">
                <Sidebar>
                    <Link to="/budget">
                        <SidebarItem icon={<File size={20} />} text="ISA" />
                    </Link>
                    <Link to="/pc">
                        <SidebarItem icon={<File size={20} />} text="PC" active />
                    </Link>
                    <Link to="/dc">
                        <SidebarItem icon={<File size={20} />} text="DC" />
                    </Link>
                    <Link to="/telnet">
                        <SidebarItem icon={<File size={20} />} text="Telnet" />
                    </Link>
                    <Link to="/project">
                        <SidebarItem icon={<File size={20} />} text="Project" />
                    </Link>
                    <Link to="/cab">
                        <SidebarItem icon={<File size={20} />} text="CAB" />
                    </Link>
                    <Link to="/sop_cp">
                        <SidebarItem icon={<File size={20} />} text="SOP/CP" />
                    </Link>
                    <Link to="/SurveyFeedbackAveris">
                        <SidebarItem icon={<File size={20} />} text="Survey Feedback Averis" />
                    </Link>
                    <Link to="/OtherDocuments">
                        <SidebarItem icon={<File size={20} />} text="Other Documents" />
                    </Link>
                    <Link to="/help">
                        <SidebarItem icon={<Info size={20} />} text="Help" />
                    </Link>
                    <hr className="my-3" />
                    <Link to="/">
                        <SidebarItem icon={<ArrowLeftFromLine size={20} />} text="Logout" />
                    </Link>
                </Sidebar>

                <div className="flex-1 p-6 main-content">
                    <div className="flex items-center justify-between mb-4">
                        <input 
                            type="search" 
                            className="px-3 py-2 border border-gray-300 rounded-md" 
                            placeholder="Search..." 
                            value={searchTerm} // Bind value to searchTerm
                            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on change
                        />
                        <button 
                            onClick={toggleForm} 
                            className="px-4 py-2 text-white transition duration-200 ease-in-out bg-blue-500 rounded-md hover:bg-blue-700"
                        >
                            Add PC
                        </button>
                    </div>

                    {isFormVisible && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="w-full max-w-md p-6 mx-4 bg-white border border-gray-300 rounded-md shadow-md">
                                <h2 className="mb-2 text-lg font-semibold">{form.id ? "Edit PC" : "Add New PC"}</h2>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="it_code"
                                        placeholder="IT Code"
                                        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        value={form.it_code}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="brand"
                                        placeholder="Brand"
                                        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        value={form.brand}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="serial_number"
                                        placeholder="Serial Number"
                                        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        value={form.serial_number}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="ip_address"
                                        placeholder="IP Address"
                                        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        value={form.ip_address}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="status"
                                        placeholder="Status"
                                        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        value={form.status}
                                        onChange={handleInputChange}
                                    />
                                    <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-md">Submit</button>
                                </form>
                                <button onClick={toggleForm} className="mt-4 text-red-500">Cancel</button>
                            </div>
                        </div>
                    )}

                    <Table>
                        <TableHeader>
                            <TableCell>No</TableCell>
                            <TableCell>IT Code</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Serial Number</TableCell>
                            <TableCell>IP Address</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableHeader>

                        {pcsFiltered.map((pc, index) => (
                            <TableRow key={pc.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{pc.it_code}</TableCell>
                                <TableCell>{pc.brand}</TableCell>
                                <TableCell>{pc.serial_number}</TableCell>
                                <TableCell>{pc.ip_address}</TableCell>
                                <TableCell>{pc.status}</TableCell>
                                <TableCell>
                                    <button 
                                        onClick={() => handleEdit(pc)} 
                                        className="px-2 py-1 text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-md hover:bg-blue-700 hover:shadow-lg hover:scale-105"
                                    >
                                        <Pencil strokeWidth={1} />
                                    </button>
                                    <button 
                                        onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this item?")) {
                                                handleDelete(pc.id);
                                            }
                                        }} 
                                        className="px-2 py-1 ml-2 text-white transition duration-300 ease-in-out transform bg-red-500 rounded-md hover:bg-red-700 hover:shadow-lg hover:scale-105"
                                    >
                                        <Trash2 strokeWidth={1} />
                                    </button>
                                   
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </div>
            </div>
        </>
    );
};

export default PcComponent;
