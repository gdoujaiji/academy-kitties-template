pragma solidity ^0.5.12;


/**
 * @dev Required interface of an ERC721 compliant contract.
 */
interface IERC721 {
    /**
     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
     */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.
     */
    //gd...event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance);

    /*
    * @dev Returns the total number of tokens in circulation.
    */
    function totalSupply() external view returns (uint256 total);

    /*
    * @dev Returns the name of the token.
    */
    function name() external view returns (string memory tokenName);

    /*
    * @dev Returns the symbol of the token.
    */
    function symbol() external view returns (string memory tokenSymbol);


    
    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 tokenId) external view returns (address owner);

    /**
     * @dev Transfers `tokenId` token from `msg.sender` to `to`.
     *
     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must be owned by `msg.sender`.
     * - any approval for tokenID should be cleared after a successful transfer.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 tokenId) external;



}