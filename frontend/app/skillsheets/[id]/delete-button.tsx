'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('本当に削除しますか？')) return;

    await fetch(`http://localhost:8080/api/skillsheets/${id}`, {
      method: 'DELETE',
    });

    router.push('/skillsheets');
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
    >
      削除
    </button>
  );
}
