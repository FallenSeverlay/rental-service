function EmptyPage() {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Page not found.</p>
        </div>
    );
}

export { EmptyPage };