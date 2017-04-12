/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
/* jshint jasmine: true */
/* global navigator, done */
exports.defineAutoTests = function() {

    describe('navigator.share', function() {
        it('navigator should have a `share` method that returns a promise', function() {
            expect(navigator.share).toBeDefined();
            expect(typeof navigator.share).toBe('function');
        });
    });

    describe('share should return a promise ', function(){
    	it ('share should return a promise', function(){
    		var dict = {
    		  title: 'sample title',
              text: 'sample text',
  			  url: 'sample url'
			};

            try {
                var promise = navigator.share(dict);
        		expect(promise).toBeDefined();
                expect(typeof promise.then).toBe('function');
                promise.then(function() {
                    done();
                }, function(err) {
                    expect(err).toBeDefined();
                    fail(err);
                    done();
                });
            } catch (err) {
                fail(err);
                done();
            }
    	});

        it ('share should resolve with only text', function(){
    		var dict = {
    		  text: 'sample text'
			};

            try {
                var promise = navigator.share(dict);
        		expect(promise).toBeDefined();
                expect(typeof promise.then).toBe('function');
                promise.then(function() {
                    console.log('passed with text');
                    done();
                }, function(err) {
                    expect(err).toBeDefined();
                    fail(err);
                    done();
                });
            } catch (err) {
                fail(err);
                done();
            }
    	});

        it ('share should resolve with only a url', function(){
    		var dict = {
    		  url: 'sample title'
    		};

            try {
                var promise = navigator.share(dict);
        		expect(promise).toBeDefined();
                expect(typeof promise.then).toBe('function');
                promise.then(function() {
                    console.log('passed with url');
                    done();
                }, function(err) {
                    expect(err).toBeDefined();
                    fail(err);
                    done();
                });
            } catch (err) {
                fail(err);
                done();
            }
    	});

        it ('share should resolve with only a title', function(){
    		var dict = {
    		  title: 'sample title'
			};

            try {
                var promise = navigator.share(dict);
        		expect(promise).toBeDefined();
                expect(typeof promise.then).toBe('function');
                promise.then(function() {
                    console.log('passed with title');
                    done();
                }, function(err) {
                    expect(err).toBeDefined();
                    fail(err);
                    done();
                });
            } catch (err) {
                fail(err);
                done();
            }
    	});

        it ('share should reject an empty options', function(){
            try {
                var promise = navigator.share({});
        		expect(promise).toBeDefined();
                expect(typeof promise.then).toBe('function');
                promise.then(function() {
                    fail('something in options should be set');
                    done();
                }, function(err) {
                    expect(err).toBeDefined();
                    done();
                });
            } catch (err) {
                fail(err);
                done();
            }
    	});

        it ('share should reject an undefined options', function(){
            try {
                var promise = navigator.share();
        		expect(promise).toBeDefined();
                expect(typeof promise.then).toBe('function');
                promise.then(function() {
                    fail('options should not be undefined');
                    done();
                }, function(err) {
                    expect(err).toBeDefined();
                    done();
                });
            } catch (err) {
                fail(err);
                done();
            }
    	});
    });
};
