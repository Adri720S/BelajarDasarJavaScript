function fibonacci(n) {
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  // Ambil deret sebelumnya
  const prev = fibonacci(n - 1);

  // Tambah angka berikutnya: last + second last
  const nextValue = prev[prev.length - 1] + prev[prev.length - 2];

  return [...prev, nextValue];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
