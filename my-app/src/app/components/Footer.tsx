// export defaults -> you will get this function if you do not do named export
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </footer>
    );
  }