import create from "zustand";

const useCurrentPageStore = create(
    (set) => ({
        currentPage: 1, 
        setCurrentPage: async (currentPageID) => {
            set(() => ({
                currentPage: currentPageID
            }))
        }
    })
)

export default useCurrentPageStore;