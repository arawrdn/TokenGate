const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenGate NFT Ticket", function () {
  let TokenGate, tokenGate, owner, addr1, addr2;

  beforeEach(async function () {
    TokenGate = await ethers.getContractFactory("TokenGate");
    [owner, addr1, addr2] = await ethers.getSigners();
    tokenGate = await TokenGate.deploy();
    await tokenGate.deployed();
  });

  it("should mint NFT tickets correctly", async function () {
    await tokenGate.mintTicket(addr1.address);
    expect(await tokenGate.ownerOf(0)).to.equal(addr1.address);

    await tokenGate.mintTicket(addr2.address);
    expect(await tokenGate.ownerOf(1)).to.equal(addr2.address);
  });

  it("should allow ticket owner to check in", async function () {
    await tokenGate.mintTicket(addr1.address);
    await tokenGate.connect(addr1).checkIn(0);
    expect(await tokenGate.checkedIn(0)).to.equal(true);
  });

  it("should prevent double check-in", async function () {
    await tokenGate.mintTicket(addr1.address);
    await tokenGate.connect(addr1).checkIn(0);
    await expect(
      tokenGate.connect(addr1).checkIn(0)
    ).to.be.revertedWith("Ticket already used");
  });

  it("should prevent non-owner from checking in", async function () {
    await tokenGate.mintTicket(addr1.address);
    await expect(
      tokenGate.connect(addr2).checkIn(0)
    ).to.be.revertedWith("Not ticket owner");
  });

  it("should validate ticket correctly", async function () {
    await tokenGate.mintTicket(addr1.address);
    expect(await tokenGate.isValid(0)).to.equal(true);
    await tokenGate.connect(addr1).checkIn(0);
    expect(await tokenGate.isValid(0)).to.equal(false);
  });
});
