import React from "react";
import { useState } from "react";
import AddressCard from "./address/AddressCard";
import AddressModal from "./address/AddressModal";

const Address = () => {
  const [addresses, setAddresses] = useState([
    {
      id: "1",
      label: "HOME",
      name: "2118 Thornridge",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(209) 555-0104",
    },
    {
      id: "2",
      label: "WORK",
      name: "123 Corporate Plaza",
      address: "123 Corporate Plaza, San Francisco, CA 94105",
      phone: "(415) 123-4567",
    },
  ]);

  const [selectedId, setSelectedId] = useState("1");
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);

  const handleSelect = (id: string) => setSelectedId(id);

  const handleEdit = (id: string) => {
    const addr = addresses.find(a => a.id === id);
    if (addr) {
      setEditData(addr);
      setModalOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSave = (data: any) => {
    if (data.id) {
      // update
      setAddresses(prev =>
        prev.map(addr => (addr.id === data.id ? data : addr))
      );
    } else {
      // add new
      setAddresses(prev => [...prev, { ...data, id: Date.now().toString() }]);
    }
  };

  return (
    <div>
      <h2 className="text-xl text-black font-bold mb-4">Select Address</h2>
      {addresses.map(addr => (
        <AddressCard
          key={addr.id}
          {...addr}
          selected={addr.id === selectedId}
          onSelect={handleSelect}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      <div className="relative my-20 text-center border-black border-t-1 border-dashed">
        <button
          className="absolute top-[-18px] text-white text-md font-bold bg-black py-1 px-3 rounded-full"
          onClick={() => {
            setEditData(null);
            setModalOpen(true);
          }}>
          +
        </button>
      </div>
      {/* address modal */}
      <AddressModal
        isOpen={modalOpen}
        initialData={editData}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Address;
