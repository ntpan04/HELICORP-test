import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './data';

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  recentlyViewed: Product[];
  
  // Actions
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  toggleWishlist: (product: Product) => void;
  
  addRecentlyViewed: (product: Product) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      recentlyViewed: [],

      addToCart: (product) => {
        const cart = get().cart;
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
          set({
            cart: cart.map(item => 
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId) => {
        set({ cart: get().cart.filter(item => item.id !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return;
        set({
          cart: get().cart.map(item => 
            item.id === productId ? { ...item, quantity } : item
          )
        });
      },
      
      clearCart: () => set({ cart: [] }),

      toggleWishlist: (product) => {
        const wishlist = get().wishlist;
        const exists = wishlist.some(item => item.id === product.id);
        if (exists) {
          set({ wishlist: wishlist.filter(item => item.id !== product.id) });
        } else {
          set({ wishlist: [...wishlist, product] });
        }
      },

      addRecentlyViewed: (product) => {
        const current = get().recentlyViewed;
        // Xóa nếu đã tồn tại để đưa lên đầu
        const filtered = current.filter(item => item.id !== product.id);
        // Thêm vào đầu và giới hạn 10 sản phẩm
        set({ recentlyViewed: [product, ...filtered].slice(0, 10) });
      }
    }),
    {
      name: 'nova-ecommerce-storage',
    }
  )
);
