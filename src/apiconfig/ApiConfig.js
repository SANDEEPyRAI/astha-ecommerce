export const baseUrl = "https://eleglam-backend.vercel.app/api/v1";

export const apiConfig = {

    userSignupSendEmailOTP:`${baseUrl}/user/userSignupSendEmailOTP`,
    userSignup:`${baseUrl}/user/userSignup`,
    getProfileWeb:`${baseUrl}/user/getProfileWeb`,
    // userSignupSendMobileOTP:`${baseUrl}/user/userSignupSendMobileOTP`,
    getAllProductsWithDeals:`${baseUrl}/product/getAllProductsWithDeals`,
    editUserProfileWeb:`${baseUrl}/user/editUserProfileWeb`,
    verifyEmailorMobileOTP:`${baseUrl}/user/verifyEmailorMobileOTP`,
    userLoginSendOTP:`${baseUrl}/user/userLoginSendOTP`,
    verifyLoginOTP:`${baseUrl}/user/verifyLoginOTP`,
    logout:`${baseUrl}/user/logout`,

    ///GUEST///
    fetchProductCategory2:`${baseUrl}/guestFlow/fetchProductCategory`,
    fetchCategoryBasedProducts2:`${baseUrl}/guestFlow/fetchCategoryBasedProducts`,
    fetchProduct2:`${baseUrl}/guestFlow/fetchProduct`,
    getAllProductsWithDeals2:`${baseUrl}/guestFlow/getAllProductsWithDeals`,
    
    ///PRODUCT///
    giveReviewAndRating:`${baseUrl}/product/giveReviewAndRating`,
    getFilteredProducts:`${baseUrl}/product/getFilteredProducts`,
    ProductFavouriteList:`${baseUrl}/product/ProductFavouriteList`,
    fetchProduct:`${baseUrl}/product/fetchProduct`,
    addAndRemoveCart:`${baseUrl}/product/addAndRemoveCart`,
    addAndRemoveToWishlist  :`${baseUrl}/product/addAndRemoveToWishlist`,
    fetchProductCategory:`${baseUrl}/product/fetchProductCategory`,
    fetchCategoryBasedProducts:`${baseUrl}/product/fetchCategoryBasedProducts`,
    getCart: `${baseUrl}/product/getCart`,
    deleteCartProduct: `${baseUrl}/product/deleteCartProduct`,
    fetchAddresses: `${baseUrl}/product/fetchAddresses`,
    addOrUpdateAddress: `${baseUrl}/product/addOrUpdateAddress`,
    deleteAddress: `${baseUrl}/product/deleteAddress`,
};