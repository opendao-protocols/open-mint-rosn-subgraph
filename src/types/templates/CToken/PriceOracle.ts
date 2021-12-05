// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PriceOracle extends ethereum.SmartContract {
  static bind(address: Address): PriceOracle {
    return new PriceOracle("PriceOracle", address);
  }

  cEthAddress(): Address {
    let result = super.call("cEthAddress", "cEthAddress():(address)", []);

    return result[0].toAddress();
  }

  try_cEthAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("cEthAddress", "cEthAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  comptroller(): Address {
    let result = super.call("comptroller", "comptroller():(address)", []);

    return result[0].toAddress();
  }

  try_comptroller(): ethereum.CallResult<Address> {
    let result = super.tryCall("comptroller", "comptroller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPriceOracle(): boolean {
    let result = super.call("isPriceOracle", "isPriceOracle():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPriceOracle(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPriceOracle", "isPriceOracle():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  makerUsdOracleKey(): Address {
    let result = super.call(
      "makerUsdOracleKey",
      "makerUsdOracleKey():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_makerUsdOracleKey(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "makerUsdOracleKey",
      "makerUsdOracleKey():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cDaiAddress(): Address {
    let result = super.call("cDaiAddress", "cDaiAddress():(address)", []);

    return result[0].toAddress();
  }

  try_cDaiAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("cDaiAddress", "cDaiAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUnderlyingPrice(cToken: Address): BigInt {
    let result = super.call(
      "getUnderlyingPrice",
      "getUnderlyingPrice(address):(uint256)",
      [ethereum.Value.fromAddress(cToken)]
    );

    return result[0].toBigInt();
  }

  try_getUnderlyingPrice(cToken: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUnderlyingPrice",
      "getUnderlyingPrice(address):(uint256)",
      [ethereum.Value.fromAddress(cToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  v1PriceOracle(): Address {
    let result = super.call("v1PriceOracle", "v1PriceOracle():(address)", []);

    return result[0].toAddress();
  }

  try_v1PriceOracle(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "v1PriceOracle",
      "v1PriceOracle():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cUsdcAddress(): Address {
    let result = super.call("cUsdcAddress", "cUsdcAddress():(address)", []);

    return result[0].toAddress();
  }

  try_cUsdcAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("cUsdcAddress", "cUsdcAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get comptroller_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get v1PriceOracle_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get cEthAddress_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get cUsdcAddress_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get cDaiAddress_(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
