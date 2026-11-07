from pathlib import Path

stream = (
    "BT\n"
    "/F1 18 Tf\n"
    "72 720 Td\n"
    "(Muhammad Wahaj) Tj\n"
    "0 -30 Td\n"
    "/F1 12 Tf\n"
    "(Cloud & DevOps Engineer) Tj\n"
    "0 -24 Td\n"
    "(Associate Consultant) Tj\n"
    "0 -24 Td\n"
    "(Resume placeholder) Tj\n"
    "ET\n"
).encode('latin-1', 'replace')

objects = [
    b"<< /Type /Catalog /Pages 2 0 R >>",
    b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    b"<< /Length " + str(len(stream)).encode('latin-1') + b" >>\nstream\n" + stream + b"\nendstream",
    b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
]

output = [b"%PDF-1.4\n"]
offsets = [0]
for i, obj in enumerate(objects, start=1):
    offsets.append(len(b"".join(output)))
    output.append(f"{i} 0 obj\n".encode('latin-1'))
    output.append(obj + b"\nendobj\n")

xref_offset = len(b"".join(output))
output.append(f"xref\n0 {len(objects) + 1}\n".encode('latin-1'))
output.append(b"0000000000 65535 f \n")
for off in offsets[1:]:
    output.append(f"{off:010d} 00000 n \n".encode('latin-1'))
output.append(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode('latin-1'))

Path('D:/Wahaj-Website/public/resume.pdf').write_bytes(b"".join(output))
print('resume.pdf created')
