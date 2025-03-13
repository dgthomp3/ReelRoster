import { useState } from 'react';

export default function ToggleButton({ initialState = false, onAddText = 'Add', onRemoveText = 'Remove', colorAdd = 'bg-green-500', colorRemove = 'bg-red-500' }) {
    const [isActive, setIsActive] = useState(initialState);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <button
            onClick={handleToggle}
            className={`px-4 py-2 text-white font-bold rounded ${isActive ? colorRemove : colorAdd}`}
        >
            {isActive ? onRemoveText : onAddText}
        </button>
  );
};
